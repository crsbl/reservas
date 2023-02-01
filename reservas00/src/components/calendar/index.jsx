import { useState } from "react";
import "../../style/calendar.css";
import "../../style/calendarResponsive.css";
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
    }, {
      day: 1,
      month: 1,
      year: 2023,
    }, {
      day: 22,
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
    classSelection
  }) => {
    return (
      <div className={classSelection}>
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
                <h3>Acciones</h3>
              </div>
              <div className="divContainerCalendar13 flexColumn">
              {bookings.map((list, index) => {
                return (
                  <div className="divContainerCalendar06 flexRow">
                    <h3>{list.day}</h3>
                    <h3>{list.month}</h3>
                    <h3>{list.year}</h3>
                    <div className="divContainerCalendar12">
                      <button
                        onClick={() => {
                          let indexResult = index;
                          setBookings(
                            bookings.filter(
                              (list, index) => index !== indexResult
                            )
                          );
                        }}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                );
              })}</div>
            </div>
          </div>
          <div className="divContainerCalendar02 flexColumn">
            <div className="flexRow divContainerCalendar10">
              <div className="flexColumn divContainerCalendar08">
                <h3>Buscar</h3>
                <div className="flexRow">
                  <div>
                    <h3>M</h3>
                    <ComboBoxCalendar
                      hookInputSelection={selector.valueInput00}
                      hookInput="CHANGE_INPUT00"
                      hookstyleComboBoxSelection={selector.stateInp00}
                      hookstyleComboBox="CHANGE_STATE_INPUT00"
                      arrayData={valueMonth[0]}
                      classSelection ="divContainerCalendarCombobox00"
                    />
                  </div>
                  <div>
                    <h3>A</h3>
                    <ComboBoxCalendar
                      hookInputSelection={selector.valueInput01}
                      hookInput="CHANGE_INPUT01"
                      hookstyleComboBoxSelection={selector.stateInp01}
                      hookstyleComboBox="CHANGE_STATE_INPUT01"
                      arrayData={valueYears}
                      classSelection ="divContainerCalendarCombobox00"
                    />
                  </div>
                </div>
              </div>
              <div className="divContainerCalendar07 flexColumn">
                <h3>Reservar</h3>
                <div className="flexRow">
                  <div className="flexColumn">
                    <h4>D</h4>
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
                    <h4>M</h4>

                    <ComboBoxCalendar
                      hookInputSelection={selector.valueInput03}
                      hookInput="CHANGE_INPUT03"
                      hookstyleComboBoxSelection={selector.stateInp03}
                      hookstyleComboBox="CHANGE_STATE_INPUT03"
                      arrayData={valueMonth[0]}
                      classSelection ="divContainerCalendarCombobox02"
                    />
                  </div>
                  <div className="flexColumn">
                    <h4>A</h4>
                    <ComboBoxCalendar
                      hookInputSelection={selector.valueInput04}
                      hookInput="CHANGE_INPUT04"
                      hookstyleComboBoxSelection={selector.stateInp04}
                      hookstyleComboBox="CHANGE_STATE_INPUT04"
                      arrayData={valueYears}
                      classSelection ="divContainerCalendarCombobox02"
                    />
                  </div>
                </div>
              </div>
              <div className="divContainerCalendar09">
                <button
                  onClick={() => {
                    let stado = true;
                    bookings.map((listBookings) => {
                      if (
                        listBookings.day === parseInt(selector.valueInput02) &&
                        listBookings.month ===
                          parseInt(selector.valueInput03) &&
                        listBookings.year === parseInt(selector.valueInput04)
                      ) {
                        stado = false;
                      }
                    });
                    if (stado === true) {
                      setBookings([
                        ...bookings,
                        {
                          day: parseInt(selector.valueInput02),
                          month: parseInt(selector.valueInput03),
                          year: parseInt(selector.valueInput04),
                        },
                      ]);
                      alert("reservado");
                    } else {
                      alert("reserva en uso");
                    }
                  }}
                >
                  Reservar
                </button>
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
                    onClick={() => {
                      dispatch({
                        type: "CHANGE_INPUT02",
                        payload: numDay,
                      });
                      dispatch({
                        type: "CHANGE_INPUT03",
                        payload: selector.valueInput00,
                      });

                      dispatch({
                        type: "CHANGE_INPUT04",
                        payload: selector.valueInput01,
                      });
                    }}
                    style={
                      state ? { backgroundColor: " rgb(91, 146, 168)", color:"white" } : {}
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
