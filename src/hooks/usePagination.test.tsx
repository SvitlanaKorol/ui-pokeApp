import { renderHook, act } from '@testing-library/react-hooks';
import usePagination from './usePagination';

describe('usePagination hook', () => {
  it('should paginate data correctly', () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const itemsPerPage = 3;

    const { result } = renderHook(() => usePagination(data, itemsPerPage, false));

    expect(result.current.paginatedData).toEqual([1, 2, 3]);
    expect(result.current.currentPage).toBe(1);

    act(() => {
      result.current.nextPage();
    });

    expect(result.current.paginatedData).toEqual([4, 5, 6]);
    expect(result.current.currentPage).toBe(2);

    act(() => {
      result.current.prevPage();
    });

    expect(result.current.paginatedData).toEqual([1, 2, 3]);
    expect(result.current.currentPage).toBe(1);
  });

  it('should reset to page 1 when isSearchActive changes', () => {
    const data = [1, 2, 3, 4, 5];
    const itemsPerPage = 2;

    const { result, rerender } = renderHook(
      (props: { itemsPerPage: number; isSearchActive: boolean }) =>
        usePagination(data, props.itemsPerPage, props.isSearchActive),
      {
        initialProps: { isSearchActive: false, itemsPerPage },
      },
    );

    act(() => {
      result.current.nextPage();
    });

    expect(result.current.paginatedData).toEqual([3, 4]);
    expect(result.current.currentPage).toBe(2);

    rerender({ isSearchActive: true, itemsPerPage });

    expect(result.current.paginatedData).toEqual([1, 2]);
    expect(result.current.currentPage).toBe(1);
  });
});
