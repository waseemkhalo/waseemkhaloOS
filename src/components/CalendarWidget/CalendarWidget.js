import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "./CalendarWidget.scss";

function CalendarWidget() {


  return (
    <div className="calendar">
      <div className="calendar__container">
        <h1 className="calendar__title">Today</h1>
        <div className="calendar__meetings-container">
          <p className="calendar__meetings">1:00 PM l Finish this portfolio </p>
          <p className="calendar__meetings">1:30 PM l Create new projects </p>
          <p className="calendar__meetings">2:30 PM l Learn new skills </p>
          <p className="calendar__meetings">3:30 PM l Get a job</p>
          <p className="calendar__meetings">
            4:30 PM l Create impactful products{" "}
          </p>
        </div>
      </div>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
      </LocalizationProvider>
    </div>
  );
}

export default CalendarWidget;
