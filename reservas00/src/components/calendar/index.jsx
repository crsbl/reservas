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
  const [stateDayMonth00, setStateDayMonth00] = useState([]);
  const [bookings, setBookings] = useState([
    {
      day: 12,
      month: 1,
      year: 2023,
    },
  ]);

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
      arrayDay.push( false );
    }

    setStateDayMonth([...arrayDay]);
  }, [selector.valueInput01, selector.valueInput00]);

  return (
    <div className="divContainerCalendar00">
      <div className="divContainerCalendar01 flexColumn">
        <h1>calendario Reservas en proceso</h1>

        <div className="flexRow">
          <div className="divContainerCalendar04">
            <h1>reservas</h1>
            <div className="flexColumn">
              {bookings.map((list) => {
                return (
                  <div className="flexRow">
                    <h3>{list.day}</h3>
                    <h3>{list.month}</h3>
                    <h3>{list.year}</h3>
                  </div>
                );
              })}
            </div>
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
              {stateDayMonth.map((listDayMonth, index) => {
                let numday = index + 1;

/* 
                setStateDayMonth(stateDayMonth)  */


              /*   console.log(listDayMonth[numday]); */
            /*     setStateDayMonth({...stateDayMonth, numday:{state:true}}); */
                console.log(stateDayMonth[1])
        /*         setStateDayMonth([...stateDayMonth]) */
                /*        bookings.forEach((listBookings) => {
                  if (
                    selector.valueInput01 === listBookings.year &&
                    listBookings.day == 14
                  ) {
                    setStateDayMonth({...stateDayMonth, numday:{state:true}});
                  }
                }); */

                return (
                  <h3
                    style={
                      listDayMonth[numday] ? { backgroundColor: "red" } : {}
                    }
                  >
                    {numday}
                  </h3>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
