import { useState } from "react"
import { useForm } from "react-hook-form"
function Suggestions() {
    const [count, setCount] = useState([{ num: 3, checked: false, addedBy: "Vel" }, { num: 34, checked: false, addedBy: "Azurae" }, { num: 75, checked: false, addedBy: "Dutzk" }])
    const { register, handleSubmit, formState: { errors } } = useForm()

    console.log(errors)

    const setData = (data) => {
        console.log(data)
    }
    return <div>
        <ul>
            {count.map(({ num, checked, addedBy }) => {
                return <li key={num}>
                    <p className={checked ? "checked" : null}>{addedBy} : {num}</p>
                </li>
            })}
        </ul>
        <form onSubmit={handleSubmit(setData)}>
            <label htmlFor="name">Your name: </label>
            <input type="string" id="name" {...register("addedBy", { required: "Name is a required field." })} />*<br />
            <p>{errors.addedBy?.message}</p>
            <label htmlFor="num">Number: </label>
            <input type="number" min="0" max="400" id="number" {...register("num", { required: "Number is a required field" })} />*
            <p>{errors.num?.message}</p>
            <br /><br />
            <button type="submit">Add!</button>
        </form>
    </div>
}

export default Suggestions