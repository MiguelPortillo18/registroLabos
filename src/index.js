import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

var uniqueKey = 0;

class DataTable extends React.Component{
  state = {
    tableRows: []
  }

  addRow = (childData) => {
    this.setState({
      tableRows: this.state.tableRows.concat([{"carnet": childData.carnet, "schedule": childData.schedule, 
      "late": childData.late,}])
    })
    uniqueKey++;
  }

  renderRows() {    
    return this.state.tableRows.map((row) => {
      return (
        <tr key={uniqueKey}>
          <td>{row.carnet}</td>
          <td>{row.schedule}</td>
          <td>{new Date().toLocaleString()}</td>
          <td>{row.late}</td>
          <td>
            {" "}
            <button
              type="button"
              value={uniqueKey}
              className="btn btn-danger"
              onClick={() => this.handleDeleteRow()}
            >
              Drop
            </button>
          </td>
        </tr>
      );
    })
  }

  handleDeleteRow(i) {
    let rows = [...this.state.tableRows];
    rows.splice(i, 1);
    this.setState({
      tableRows: rows
    });
  }

  render() {
    return (
      <div className="container">
        <MainForm callBackFromParent={this.addRow}/>
        <section>
          <table className="table table-hover">
            <thead>
              <tr className="table-dark">
                <th scope="col">Carnet</th>
                <th scope="col">Horario de laboratorio</th>
                <th scope="col">Hora de ingreso</th>
                <th scope="col">Tarde?</th>
                <th scope="col">Drop</th>
              </tr>
            </thead>
            <tbody id="table_body">
            {this.renderRows()}
            </tbody>
          </table>
        </section>
      </div>
    );
  }
} 

class MainForm extends React.Component{
  constructor(props){
    super(props);
  }

  renderSelection(message){
    return (
      <div className="form-group">
        <label htmlFor="schedule">Seleccione el horario:</label>
        <select name="schedule" className="form-control" id="schedule_field">
          <option>{message[0]}</option>
          <option>{message[1]}</option>
          <option>{message[2]}</option>
          <option>{message[3]}</option>
          <option>{message[4]}</option>
          <option>{message[5]}</option>
        </select>
      </div>
    );
  }

  renderInput(){
    return (
      <div className="form-group">
        <label htmlFor="carnet" className="col-sm-2 col-form-label">Ingrese el carnet: </label>
        <br />
        <input
          className="form-control"
          type="text"
          name="carnet"
          id="carnet_field"
        />
      </div>
    );
  }

  renderH1(message){
    return (
      <h1>{message}</h1>
    );
  }

  renderSwitch(){
    return (
      <div className="form-group">
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="late_switch"
          />
          <label className="custom-control-label" htmlFor="late_switch">Llegó tarde?</label>
        </div>
      </div>
    );
  }

  renderInsertButton(){
    return (
      <div className="form-group">
        <button type="button" className="btn btn-danger" id="submit_btn" onClick={() => this.handleClick()}>
          Ingresar
        </button>
      </div>
    );
  }

  renderDropButton(){
    return (
      <div className="form-group">
        <button type="button" className="btn btn-danger" id="submit_btn" onClick={() => this.handleClick()}>
          Ingresar
        </button>
      </div>
    );
  }

  handleClick = () =>{
    let carnet = document.getElementById("carnet_field").value;
    let schedule = document.getElementById("schedule_field").options;
    let realSchedule = schedule[schedule.selectedIndex].text;
    let late = parseLateSwitch(document.getElementById("late_switch").checked);
    
    this.props.callBackFromParent({"carnet": carnet, "schedule": realSchedule, "late": late});
  }

  render() {
    return (
      <div className="container">
        <br />
        <div className="jumbotron">
          {this.renderH1("Registro de laboratorio")}
          {this.renderInput()}
          {this.renderSelection([
            "Lunes de 9:00 a 11.00",
            "Martes de 13:30 a 15:30",
            "Miércoles de 9:00 a 11.00",
            "Jueves de 13:30 a 15:30",
            "Viernes de 9:00 a 11.00",
            "Viernes de 15:30 a 17:30"])}
          {this.renderSwitch()}
          {this.renderInsertButton()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<DataTable/>, document.getElementById("root"));

var parseLateSwitch = value => {
  if (value) {
      return "Llego tarde";
  } else {
      return "A tiempo";
  }
};