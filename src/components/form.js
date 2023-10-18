
const Form = props => (
  <form onSubmit={props.WeatherMethod}>
    <input type='text' placeholder='city' name='city'/>
    <button>find out</button>
  </form>
);

export default Form