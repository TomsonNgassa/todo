@echo off

REM Windows script for running unit tests using grunt-karma
REM You have to run server and capture some browser first
REM
REM Requirements:
REM - NodeJS (http://nodejs.org/)
REM - Karma (npm install -g karma)

set BASE_DIR=%~dp0
npm install
grunt karma:continuous
