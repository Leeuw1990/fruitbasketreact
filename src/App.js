import React from 'react';
import './App.css';

function App() {

    const [counter, setCounter] = React.useState(0);
    const [counterTwo, setCounterTwo] = React.useState(0);
    const [counterThree, setCounterThree] = React.useState(0);
    const [counterFour, setCounterFour] = React.useState(0);

    function resetButton () {
        setCounter(0)
        setCounterTwo(0)
        setCounterThree(0)
        setCounterFour(0)
    }


  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        <fieldset>
            <h3>Aardbeien</h3>
            <button
                className="increaseButton"
                type="button"
                value={counter}
                onClick={(e) => setCounter(counter - 1)}
            > -
        </button>
            <h3>{counter}</h3>
            <button className="decreaseButton"
                    type="button"
                    value={counter}
                    onClick={(e) => setCounter(counter + 1)}
            > +
        </button>
        </fieldset>
        <fieldset>
            <h3>Bananen</h3>
            <button
                className="increaseButtonTwo"
                type="button"
                value={counterTwo}
                onClick={(e) => setCounterTwo(counterTwo - 1)}
            > -
            </button>
            <h3>{counterTwo}</h3>
            <button className="decreaseButtonTwo"
                    type="button"
                    value={counterTwo}
                    onClick={(e) => setCounterTwo(counterTwo + 1)}
            > +
            </button>
        </fieldset>
        <fieldset>
            <h3>Appels</h3>
            <button
                className="increaseButtonThree"
                type="button"
                value={counterThree}
                onClick={(e) => setCounterThree(counterThree - 1)}
            > -
            </button>
            <h3>{counterThree}</h3>
            <button className="decreaseButtonThree"
                    type="button"
                    value={counterThree}
                    onClick={(e) => setCounterThree(counterThree + 1)}
            > +
            </button>
        </fieldset>
        <fieldset>
            <h3>Kiwi's</h3>
            <button
                className="increaseButtonFour"
                type="button"
                value={counterFour}
                onClick={(e) => setCounterFour(counterFour - 1)}
            > -
            </button>
            <h3>{counterFour}</h3>
            <button className="decreaseButtonFour"
                    type="button"
                    value={counterFour}
                    onClick={(e) => setCounterFour(counterFour + 1)}
            > +
            </button>
        </fieldset>
        <button
        className="resetButton"
        type="button"
        onClick={resetButton}
        > Reset
        </button>
    </>
  );
}

export default App;
