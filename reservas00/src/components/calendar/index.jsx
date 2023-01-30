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
  const valueYears = [2023, 2024, 2025, 2026];

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.calendarReducer);
  const [stateDayMonth, setStateDayMonth] = useState([]);
  const [bookings, setBookings] = useState([
    {
      day: 12,
      month: 1,
      year: 2023,
    },
    {
      day: 1,
      month: 1,
      year: 2023,
    },
    {
      day: 25,
      month: 1,
      year: 2023,
    },
    {
      day: 10,
      month: 3,
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
    while (n < numDay) {
      n++;
      arrayDay.push(n);
    }
    setStateDayMonth(arrayDay);
  }, [selector.valueInput01, selector.valueInput00]);

  return (
    <div className="divContainerCalendar00">
      <div className="divContainerCalendar01 flexColumn">
        <h1>calendario Reservas en proceso</h1>

        <div className="flexRow divContainerCalendar11">
          <div className="divContainerCalendar04">
            <h1>reservas</h1>
            <div className="flexColumn">
              <div className="divContainerCalendar05 flexRow">
                <h3>Dia</h3>
                <h3>Mes</h3>
                <h3>Año</h3>
              </div>
              {bookings.map((list) => {
                return (
                  <div className="divContainerCalendar06 flexRow">
                    <h3>{list.day}</h3>
                    <h3>{list.month}</h3>
                    <h3>{list.year}</h3>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="divContainerCalendar02 flexColumn">
            <div className="flexRow divContainerCalendar10">
              <div className="flexColumn divContainerCalendar08">
                <h3>Buscar</h3>
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
              </div>
              <div className="divContainerCalendar07 flexColumn">
                <h3>Reservar</h3>
                <div className="flexRow">
                  <div className="flexColumn">
                    <h4>dia</h4>
                    <input
                      onChange={(e) => {
                        dispatch({
                          type: "CHANGE_INPUT02",
                          payload: e.currentTarget.value,
                        });
                      }}
                      value={selector.valueInput02}
                    ></input>
                  </div>
                  <div className="flexColumn">
                    <h4>mes</h4>

                    <ComboBoxCalendar
                      hookInputSelection={selector.valueInput03}
                      hookInput="CHANGE_INPUT03"
                      hookstyleComboBoxSelection={selector.stateInp03}
                      hookstyleComboBox="CHANGE_STATE_INPUT03"
                      arrayData={valueMonth[0]}
                    />
                  </div>
                  <div className="flexColumn">
                    <h4>año</h4>
                    <ComboBoxCalendar
                      hookInputSelection={selector.valueInput04}
                      hookInput="CHANGE_INPUT04"
                      hookstyleComboBoxSelection={selector.stateInp04}
                      hookstyleComboBox="CHANGE_STATE_INPUT04"
                      arrayData={valueYears}
                    />
                  </div>
                </div>
              </div>
              <div className="divContainerCalendar09">
                <button>Reservar</button>
              </div>
            </div>

            <div className="divContainerCalendar03">
              {stateDayMonth.map((listDayMonth, index) => {
                let state = false;
                let numDay = index + 1;
                bookings.map((listBookings) => {
                  if (
                    numDay === listBookings.day &&
                    selector.valueInput01 === listBookings.year &&
                    selector.valueInput00 === listBookings.month
                  ) {
                    state = true;
                  }
                });

                return (
                  <h3
                    style={
                      state ? { backgroundColor: "rgb(199, 179, 67)" } : {}
                    }
                  >
                    {numDay}
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
