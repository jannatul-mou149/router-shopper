import React from 'react';
import './Bonus.css'

const Bonus = () => {
    return (
        <div>
            <h1>Frequenty Asked Question</h1>
            <div>
                <table>
                    <tr>
                        <th>
                            Question
                        </th>
                        <th>
                            Answer
                        </th>
                    </tr>
                    <tr>
                        <td>
                            How UseState works?
                        </td>
                        <td>
                            UseState is a Hook. By using UseState we can easily have state variables in functional components.UseState mainly returns two different thing. One is a variable with the current state value and another one is a function to update this value. Example : const [products, setProducts] = useState([]); Here, products is variable with current state and setProducts is function to update the value.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            How react works??
                        </td>
                        <td>
                            In any DOM multiple state can be changed. React does a smart work here, it doesn't commit state changes each time. Rather it creates a Virtual DOM and compare it to the Browser DOM to understand the recent changes in the DOM. In a sense React does batch updates. This is how React updates the DOM automatically when we make changes in React Element.
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Bonus;