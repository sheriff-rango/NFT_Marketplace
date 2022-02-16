import React, { useState } from "react";

import { SortParams } from "../../../../Constants";

import HeroItem from "./HeroItem";
import {
  ItemListWrapper,
  ItemListHeader,
  CurrencyToggle,
  CurrencyItem,
  ItemListBody,
  ItemNotFound,
  PaginationWrapper,
  PaginationButton,
  PaginationValue,
} from "./styled";

export enum CurrencyType {
  bnb,
  busd,
}

export enum SortType {
  newest,
  latest,
  lowest,
  highestPrice,
}

interface Props {
  items: any[];
  totalItemsCount: number;
  filterCondition: any;
  setFilterCondition: any;
}

const ItemList: React.FC<Props> = ({
  items,
  totalItemsCount,
  filterCondition,
  setFilterCondition,
}) => {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyType>(
    CurrencyType.bnb
  );
  const [sortValue, setSortValue] = useState<SortType>(SortType.newest);

  const handleClickCurrencyType = (currencyType: CurrencyType) => {
    setSelectedCurrency(currencyType);
    setFilterCondition({
      ...filterCondition,
      currency: CurrencyType[currencyType].toUpperCase(),
    });
  };

  const handleChangeSortType = (e: any) => {
    const value = e.target.value;
    setSortValue(value);
    setFilterCondition({
      ...filterCondition,
      sort: {
        sortDirection: value.split("/")[1],
        sortField: value.split("/")[0],
      },
    });
  };

  const paginationInfo = filterCondition.pagination || {};
  const totalPages = Math.ceil(totalItemsCount / paginationInfo.size);

  const handleChangePaginationPage = (page: number) => {
    let paginationInfo = filterCondition.pagination || {};
    paginationInfo.page = page < 1 ? 1 : page > totalPages ? totalPages : page;
    setFilterCondition({
      ...filterCondition,
      pagination: paginationInfo,
    });
  };

  return (
    <ItemListWrapper>
      <ItemListHeader>
        <span>{`${totalItemsCount} Heros`}</span>
        <div>
          <CurrencyToggle>
            <CurrencyItem
              onClick={() => handleClickCurrencyType(CurrencyType.bnb)}
              active={selectedCurrency === CurrencyType.bnb}
              image="/assets/images/currency/binance-coin.png"
            />
            <CurrencyItem
              onClick={() => handleClickCurrencyType(CurrencyType.busd)}
              active={selectedCurrency === CurrencyType.busd}
              image="/assets/images/currency/binance-usd.png"
            />
          </CurrencyToggle>
          <select onChange={handleChangeSortType} value={sortValue}>
            {SortParams.map((param, index) => {
              return (
                <option key={index} value={param.value}>
                  {param.label}
                </option>
              );
            })}
          </select>
        </div>
      </ItemListHeader>
      <ItemListBody>
        {items.length > 0 ? (
          items.map((heroItem) => {
            return <HeroItem key={heroItem._id} hero={heroItem} />;
          })
        ) : (
          <ItemNotFound>
            <div />
            <span>Hero Not Found</span>
          </ItemNotFound>
        )}
      </ItemListBody>
      {items.length > 0 && (
        <PaginationWrapper>
          <PaginationButton
            onClick={() => handleChangePaginationPage(paginationInfo.page - 1)}
            disabled={paginationInfo.page === 1}
          >
            Previous
          </PaginationButton>
          <PaginationValue>
            Page
            <input
              type="number"
              min={1}
              max={totalPages}
              value={paginationInfo.page}
              onChange={(e: any) => handleChangePaginationPage(e.target.value)}
            />
            {`of ${totalPages}`}
          </PaginationValue>
          <PaginationButton
            onClick={() => handleChangePaginationPage(paginationInfo.page + 1)}
            disabled={paginationInfo.page === totalPages}
          >
            Next
          </PaginationButton>
        </PaginationWrapper>
      )}
    </ItemListWrapper>
  );
};

export default ItemList;
