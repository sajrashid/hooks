import { ACTIONS } from '../reducers/actions';
import React from "react";
import { createMarkup } from '../utils/utils'
import { isConcatSpreadable } from 'core-js/fn/symbol';

function Pager({ state, dispatch }) {
    const handleFocus = (e) => e.target.select();

    function handlePagingClick(e) {
        let buttonName = e.currentTarget.id.toString().toUpperCase()
        dispatch({ type: ACTIONS[buttonName] })
    }
    const pagingInputChange = (e) => {
        e.preventDefault()
        const el = e.currentTarget
        let pagerInputValue = parseInt(el.value)
        if ((pagerInputValue < state.totalPages + 1) && (pagerInputValue > 0)) {
            dispatch({ type: ACTIONS.GOTOPAGE, payload: { gotoPage: pagerInputValue } })
        }

        e.target.select();
    }
    const itemsPerPageInputChange = (e) => {
        const el = e.currentTarget
        let itemsPerPage = parseInt(el.value)
        if ((itemsPerPage > 0) && (itemsPerPage < state.jsonCopy.length + 1)) {
            dispatch({ type: ACTIONS.ITEMSPERPAGE, payload: { itemsPerPage: itemsPerPage } })
        }

        e.target.select();
    }
    const createPager = () => {
        let arr = Object.keys(state.pagerIcons)


        return arr.map((key, index) => {
            const html = state.pagerIcons[key]
            console.log(key, index)
            var disabled = false

            if (key === 'first') {
                state.pageNo < 2 ? disabled = true : disabled = false
                return <button disabled={disabled} key={index} id={key} onClick={handlePagingClick} dangerouslySetInnerHTML={createMarkup(html)}></button>

            }

            if (key === 'previous') {
                state.pageNo < 2 ? disabled = true : disabled = false
                return <button disabled={disabled} key={index} id={key} onClick={handlePagingClick} dangerouslySetInnerHTML={createMarkup(html)}></button>

            }

            if (key === 'next') {
                state.pageNo === state.totalPages ? disabled = true : disabled = false
                return <React.Fragment key={index}>
                    <div><input onFocus={handleFocus} onChange={pagingInputChange} value={state.pagerInput} type="number" /></div>
                    <button disabled={disabled} id={key} onClick={handlePagingClick} dangerouslySetInnerHTML={createMarkup(html)}></button>
                </React.Fragment>
            }

            if (key === 'last') {
                state.pageNo === state.totalPages ? disabled = true : disabled = false
                return <React.Fragment key={index}>
                    <button disabled={disabled} id={key} onClick={handlePagingClick} dangerouslySetInnerHTML={createMarkup(html)}></button>
                    <div className="numberOfPages">
                        {state.pageNo}&nbsp;of&nbsp;{state.totalPages}&nbsp;pages
                    </div>
                    <div>
                        <input onChange={itemsPerPageInputChange} type="number" max="10000" value={state.pageSize} ></input>
                    </div>
                </React.Fragment>
            }

            return <button key={index} id={key} onClick={handlePagingClick} dangerouslySetInnerHTML={createMarkup(html)}></button>
        })
    }

    return (
        createPager()
    )

}

export default Pager