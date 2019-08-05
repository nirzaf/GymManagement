var PaginationModel = /** @class */ (function () {
    function PaginationModel() {
        this.selectItemsPerPage = [10, 25, 100];
        this.pageSize = this.selectItemsPerPage[0];
        this.pageIndex = 1;
        this.allItemsLength = 0;
    }
    return PaginationModel;
}());
export { PaginationModel };
//# sourceMappingURL=PaginationModel.js.map