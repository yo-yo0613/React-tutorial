import ComponentC from "./ComponentC.jsx";
function ComponentB(){

    return(
        <div className="box">
            <h1>ConponentB</h1>
            <ComponentC ></ComponentC>
        </div>
    );
}

export default ComponentB;