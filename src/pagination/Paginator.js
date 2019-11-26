import React, { Component } from 'react'

export class Paginator extends Component {

    state = {
        currentPage : 1,
        disableLeft: true
    }

    onPageChange = (index) => {
        this.setState({currentPage:index})
        this.setState({disableLeft: index<=0})
        this.props.pageChanged(index)
    }

    render() {

        var pagesToRender = Math.ceil(this.props.totalRecords / this.props.recordPerPage);
        var pages = [];
        for (let index = 0; index <= pagesToRender-1; index++) {
            pages.push(<li onClick={()=> this.onPageChange(index)} key={index} class="page-item"><a class="page-link" href="#">{index+1}</a></li>)
        }

        return (
            <div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        {/* <li class="page-item" disabled={this.state.disableLeft}>
                            <a class="page-link" href="#"  aria-label="Previous" onClick={()=> this.onPageChange(this.state.currentPage - 1)}>
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li> */}

                        {pages}
                        
                        {/* <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next" onClick={()=> this.onPageChange(this.state.currentPage + 1)}>
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li> */}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Paginator
