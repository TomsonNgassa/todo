@echo off

REM Windows script for running end-to-end integration test with protractor
REM It will open a browser run the test, close it and display the result on
REM the console.
REM
REM Requirements:
REM - NodeJS (http://nodejs.org/)
REM - Protractor (npm install -g karma)

set BASE_DIR=%~dp0
grunt protractor:e2e
