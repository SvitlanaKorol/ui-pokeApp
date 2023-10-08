import React, { useEffect, useState, useMemo } from 'react';
import { getFetchData } from '../../redux/epics/getFetchData';
import { RootState } from '../../redux/reducers/rootReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { ContentView } from '../../components/contentView/contentView';
import { LoadingView } from '../../components/loadingView/loadingView';
import { SearchInput } from '../../components/searchAndSort/searchInput/searchInput';
import { FilterSelect } from '../../components/searchAndSort/filterSelect/filterSelect';
import { PrevNexBar } from '../../components/prevNexButton/prevNexBar';
import NavBar from '../../components/navBar/navBar';
import { calculateUniqueTypes } from '../../utils';
import usePagination from '../../hooks/usePagination';
import useSortSearchFilter from '../../hooks/useSortSearch';
import { DataItem } from '../../types/types';
import { ITEMS_PER_PAGE } from '../../constants/constant';

export const ViewHomeRoute: React.FC = () => {
  const isLoading = useSelector((state: RootState) => state.data.isLoading);
  const dataFromRedux = useSelector((state: RootState) => state.data.items);
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();

  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');

  const { filteredData } = useSortSearchFilter(dataFromRedux, searchQuery, selectedType);
  const { currentPage, nextPage, prevPage, totalPages } = usePagination<DataItem>(
    isSearchActive ? filteredData : dataFromRedux,
    ITEMS_PER_PAGE,
    isSearchActive,
  );

  useEffect(() => {
    if (!dataFromRedux.length) {
      dispatch(getFetchData());
    }
  }, [dataFromRedux, dispatch]);

  useEffect(() => {
    if (searchQuery || selectedType) {
      setIsSearchActive(true);
    } else {
      setIsSearchActive(false);
    }
  }, [searchQuery, selectedType]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
  };

  const paginatedData = useMemo(() => {
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIdx = startIdx + ITEMS_PER_PAGE;
    return (isSearchActive ? filteredData : dataFromRedux).slice(startIdx, endIdx);
  }, [currentPage, dataFromRedux, filteredData, isSearchActive]);

  const uniqueTypes = calculateUniqueTypes(dataFromRedux);

  return (
    <>
      <NavBar />
      <SearchInput searchQuery={searchQuery} handleSearch={handleSearch} />
      <FilterSelect
        selectedType={selectedType}
        handleTypeChange={handleTypeChange}
        uniqueTypes={uniqueTypes}
      />
      {isLoading ? (
        <LoadingView />
      ) : (
        <>
          <ContentView data={paginatedData} />
          <PrevNexBar
            currentPage={currentPage}
            totalPages={totalPages}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </>
      )}
    </>
  );
};

export default ViewHomeRoute;
