import { useState } from "react";
import "../../style/calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Calendar = () => {
  const valueMonth = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
  ];
  const valueYears = ["2023", "2024", "2025", "2026"];

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.calendarReducer);
  const [stateDayMonth, setStateDayMonth] = useState([]);

  const ComboBoxCalendar = ({
    hookInputSelection,
    hookInput,
    hookstyleComboBoxSelection,
    hookstyleComboBox,
    arrayData,
  }) => {
    return (
      <div className="divContainerCalendarCombobox00">
        <input
          onClick={() => {
            dispatch({
              type: hookstyleComboBox,
              payload: true,
            });
          }}
          type="text"
          value={hookInputSelection}
        />
        <div
          style={
            hookstyleComboBoxSelection
              ? { display: "block" }
              : { display: "none" }
          }
          className="divContainerCalendarCombobox01 flexColumn"
        >
          {arrayData.map((list) => {
            return (
              <h3
                onClick={() => {
                  dispatch({
                    type: hookInput,
                    payload: list,
                  });
                  dispatch({
                    type: hookstyleComboBox,
                    payload: false,
                  });
                }}
              >
                {list}
              </h3>
            );
          })}
        </div>
      </div>
    );
  };

  useEffect(() => {
    let numDay = new Date(
      selector.valueInput01,
      selector.valueInput00,
      0
    ).getDate();
    let n = 0;
    let arrayDay = [];
    console.log(numDay);
    while (n < numDay) {
      n++;
      arrayDay.push([n]);
    }
    setStateDayMonth(arrayDay);
  }, [selector.valueInput01, selector.valueInput00]);

  return (
    <div className="divContainerCalendar00">
      <div className="divContainerCalendar01 flexColumn">
        <h1>calendario</h1>

        <div className="flexRow">
          <div className="divContainerCalendar04">
            <h1>reservas</h1>
          </div>
          <div className="divContainerCalendar02 flexColumn">
            <div className="flexRow">
              <div>
                <h3>mes</h3>
                <ComboBoxCalendar
                  hookInputSelection={selector.valueInput00}
                  hookInput="CHANGE_INPUT00"
                  hookstyleComboBoxSelection={selector.stateInp00}
                  hookstyleComboBox="CHANGE_STATE_INPUT00"
                  arrayData={valueMonth[0]}
                />
              </div>
              <div>
                <h3>año</h3>
                <ComboBoxCalendar
                  hookInputSelection={selector.valueInput01}
                  hookInput="CHANGE_INPUT01"
                  hookstyleComboBoxSelection={selector.stateInp01}
                  hookstyleComboBox="CHANGE_STATE_INPUT01"
                  arrayData={valueYears}
                />
              </div>
            </div>

            <div className="divContainerCalendar03">
              {stateDayMonth.map((list) => {
                return <h3>{list}</h3>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
