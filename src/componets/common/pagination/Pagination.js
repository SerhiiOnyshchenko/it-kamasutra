import React, { Component } from "react";
import { Pagination } from "semantic-ui-react";
import s from "./Pagination.module.css";

export default class PaginationExamplePagination extends Component {
  state = { activePage: 1 };
  handlePaginationChange = (e, { activePage }) => {
    this.setState({ activePage });
    this.props.onPageChenged(activePage);
  };
  render() {
    const { activePage } = this.state;
    return (
      <>
        <Pagination
          className={s.item}
          activePage={activePage}
          onPageChange={this.handlePaginationChange}
          totalPages={this.props.count}
        />
      </>
    );
  }
}
