import ES5Functions from "./ES5Functions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters";
function WorkingWithFunctions() {
    console.log('Hello World!');
   return(
      <div>
         <ES5Functions/>
         <ArrowFunctions/>
         <ImpliedReturn/>
         <FunctionParenthesisAndParameters/>
      </div>
   );
}
export default WorkingWithFunctions
