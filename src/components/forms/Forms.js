import './Forms.css';

function Form(props) {

    const obj = props.obj;
    let inputList = [];

    if (obj === "card") {
        inputList.push(Input({ id: 0, name: 'text-front', label: 'Front', type: 'text', placeholder: '日本語', defaultValue: '' }))
        inputList.push(Input({ id: 0, name: 'text-back', label: 'Back', type: 'text', placeholder: 'English', defaultValue: '' }))
        inputList.push(Input({ id: 0, name: 'deck', label: 'Deck', type: 'text', placeholder: 'Numbers', defaultValue: '' }))
    }
    else if (obj === "deck") {
        inputList.push(Input({ id: 0, name: 'name', label: 'Name', type: 'text', placeholder: 'New Deck', defaultValue: '' }))
    }

    return (
        <form id={"form_" + props.id}
            className="form"
            method={props.method}>
            {inputList}
            <input className='input' id="form-input_submit" type='submit' value='Go!' />
        </form>);

}

function Input(props) {

    return (
        <div className="input_container">
            <label for={"form-input_" + props.id}>{props.label}</label>
            <input
                className='input'
                key={props.id}
                id={"form-input_" + props.id}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                defaultValue={props.defaultValue}
            />
        </div>);

}

export { Form };