import { PAGINATION } from "@/utils/constants";
import { useState } from "react";

const useDataTable = () => {
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: Number(PAGINATION.DEFAULT_PAGE_SIZE),
    });
    const pageSize = PAGINATION.PAGE_SIZE_OPTIONS;
    const [size, setSize] = useState<number>(pageSize[0]);

    return { pagination, setPagination, pageSize, size, setSize };
}

export default useDataTable;