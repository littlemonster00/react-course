import moment from "moment";
import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from "../../actions/filters";

test("should generate set text filter object", () => {
  const action = setTextFilter("bill");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "bill"
  });
});

test("should generate set text filter object with default", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

test("should generate set sort by amount", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});

test("should generate set sort by date", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE"
  });
});

test("should generate start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("should generate end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});
