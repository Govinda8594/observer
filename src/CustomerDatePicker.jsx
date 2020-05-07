import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { CalendarToday } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

// Above packege absoutely needed of their specific version(see in package.json file), otherwise it may not work
const useStyles = makeStyles({
  root: {
    fontSize: 25,
    color: "#2DC84D",
  },
});

function CustomerDatePicker() {
  const [date, setDate] = useState(new Date());
  const handleChange = (date) => setDate(date);
  const classes = useStyles();

  // this are some of the property which i have overwritten and set the value
  // specific to my need, you can customize your datepicker of your choice
  // their are more property to be explored
  const materialTheme = createMuiTheme({
    overrides: {
      MuiPickersToolbar: {
        toolbar: {
          backgroundColor: "#2DC84D !important", //You can customize toolbar color of your own
        },
      },
      MuiPickersDay: {
        daySelected: {
          backgroundColor: "#2DC84D !important",
        },
      },
      MuiButton: {
        textPrimary: {
          color: "#2DC84D !important",
        },
      },
      // svg: {
      //   backgroundImage: `url(${calender})`,
      //   backgroundSize: 20,
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "right",
      //   cursor: "pointer",
      // },

      MuiFormControl: {
        root: {
          width: "100%",
        },
      },
      MuiFormLabel: {
        root: {
          fontSize: "20px",
          fontFamily: "unset",
          color: "#2DC84D !important",
        },
      },
      MuiInputBase: {
        input: {
          fontFamily: "Montserrat,SemiBold",
        },
      },
    },
  });
  return (
    <div
      className="form-group"
      style={{ margin: 15, position: "relative", background: "white" }}
    >
      <MuiThemeProvider theme={materialTheme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Click on Calender"
            format="dd-MM-yyyy"
            value={date}
            onChange={handleChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            keyboardIcon={<CalendarToday className={classes.root} />}
          />
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    </div>
  );
}

export default CustomerDatePicker;
