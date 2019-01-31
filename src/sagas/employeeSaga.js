import { call, put } from 'redux-saga/effects';
import {
  fetchEmployeeDetailsService,
  updateEmployeeDetailsService,
  setVacationsService,
  fetchVacationsService,
  deleteVacationService
} from '../services/employeesService';

import * as types from '../actions';

export function* fetchEmployeeDetails(payload) {
  try {
    const response = yield call(fetchEmployeeDetailsService, payload);

    yield [
      put({ type: types.FETCH_EMPLOYEE_DETAILS_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.FETCH_EMPLOYEE_DETAILS_SUCCESS, error });
  }
};

export function* updateEmployeeDetails(payload) {
  try {
    const response = yield call(updateEmployeeDetailsService, payload);

    yield [
      put({ type: types.UPDATE_EMPLOYEE_DETAILS_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.UPDATE_EMPLOYEE_DETAILS_SUCCESS, error });
  }
};

export function* setVacations(payload) {
  try {
    const response = yield call(setVacationsService, payload.range);

    yield [
      put({ type: types.SET_VACATIONS_SUCCESS, response })
    ];
  } catch (error) {
    yield put({ type: types.SET_VACATIONS_SUCCESS, error });
  }
};

export function* fetchVacations(payload) {
  try {
    const response = yield call(fetchVacationsService, payload);

    yield [
      put({ type: types.FETCH_VACATIONS_SUCCESS, response })
    ];
  } catch (error) {
    yield put({ type: types.FETCH_VACATIONS_SUCCESS, error });
  }
};

export function* deleteVacation(payload) {
  try {
    const response = yield call(deleteVacationService, payload);

    yield [
      put({ type: types.DELETE_VACATION_SUCCESS, response })
    ];
  } catch (error) {
    yield put({ type: types.DELETE_VACATION_SUCCESS, error });
  }
};