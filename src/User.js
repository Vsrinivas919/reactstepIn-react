import { useState, useEffect, useMemo } from 'react';

const User = (props) => {


    const [count, setCount] = useState(0);
    const [darkMode, setDarkMode] = useState(false);


    // Expensive calculation
    const doubledCount = useMemo(() => {
        console.log("Calculating...");
        let result = 0;
        for (let i = 0; i < 1_000_000_000; i++) {
            result = count * 2;
        }
        return result;
    }, []); // only re-run when `count` changes

    const themeStyles = {
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
        padding: "1rem",
    };

    return (
        <div style={themeStyles}>
            <h2>Doubled Count: {doubledCount}</h2>
            <h2>count:{count}</h2>

            <button onClick={() => setCount(c => c + 1)}>
                Increment Count
            </button>

            <button onClick={() => setDarkMode(d => !d)}>
                Toggle Theme
            </button>
        </div>
    );
}

// dfydjydydydjydjyrdyrsjts
//     const InititalValues =
//         new Array(29_99_999).fill(0).map((_, i) => {
//             return {
//                 id: i,
//                 isSelected: i === 29_99_998,
//             }
//         }
//         )

//     const [count, setCount] = useState(0);
//     const [selectedValue] = useState(InititalValues)

//     const selectedItems =
//         //  useMemo(
//         //     () => 
//         selectedValue.find((items) => items.isSelected)
//     //     [selectedValue]
//     // );



//     console.log("InititalValues", selectedItems)

//     return (
//         <div id='user-card'>
//             <h1>count: {count}</h1>
//             <h1>INcrement value : {selectedItems?.id}</h1>
//             <button onClick={() => {
//                 setCount(count + 1)
//             }

//             }>Increase</button>
//             <h2>User Name : {props.name}</h2>
//             <h2>locaction : Andhra</h2>
//             <h2>contact : vsrinivas919@gmail.com</h2>
//         </div>
//     )
// }

export default User;