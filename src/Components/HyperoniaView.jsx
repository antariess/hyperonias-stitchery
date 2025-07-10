import { useState } from "react"
function HyperioniaView() {
    const [count, setCount] = useState([{ num: 3, checked: false }, { num: 34, checked: false }, { num: 75, checked: false }])
    const clearAllItems = () => {
        setCount([])
    }
    const clearItem = (index) => {
        const newCount = [...count]
        newCount.splice(index, 1)
        setCount(newCount)
    }
    const checkAllItems = () => {
        setCount(count.map((item) => {
            const newItem = { ...item }
            newItem.checked = true
            return newItem
        }))
    }
    const checkItem = (index) => {
        const newCount = [...count]
        newCount[index].checked = true
        setCount(newCount)
    }

    return <div>
        <section>
            {count.map(({num, checked}, index) => {
                return <div key={num}>
                    <p className={checked ? "checked" : null}>{num}</p>
                    <button onClick={() => checkItem(index)}>Done</button>
                    <button onClick={() => clearItem(index)}>Remove</button>
                </div>
            })}
        </section>
        <section>
            <button onClick={() => clearAllItems()}>Clear All</button>
            <button onClick={() => checkAllItems()}>Smashed It!</button>
        </section>
    </div>
}

export default HyperioniaView