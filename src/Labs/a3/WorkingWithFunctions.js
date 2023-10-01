import ES5Functions from "./ES5Functions"
import ArrowFunction from "./ArrowFunction";
import ImpliedReturn from "./ImpliedReturn";
import FunctionParenthesis from "./FunctionParenthesisAnsParameter";
import WorkingWithArrays from "./WorkingWithArrays";
import ArrayLength from "./ArrayIndexAndLength";
import AddRemove from "./AddRemoveArray";
import ForLoop from "./FoorLoops";
import MapFunction from "./MapFunctions";
function WorkingWithFunctions(){
    return(
        <div>
            <ES5Functions></ES5Functions>
            <ArrowFunction></ArrowFunction>
            <ImpliedReturn></ImpliedReturn>
            <FunctionParenthesis></FunctionParenthesis>
            <WorkingWithArrays></WorkingWithArrays>
            <ArrayLength></ArrayLength>
            <AddRemove></AddRemove>
            <ForLoop></ForLoop>
            <MapFunction></MapFunction>
        </div>
    );
}



export default WorkingWithFunctions