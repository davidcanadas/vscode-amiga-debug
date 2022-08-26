@echo off

rem @file   mkfinal.bat
rem @author David Cañadas Mazo

pushd
cd %~dp0
"%~2\Shrinkler.exe" %~3 "%~1" "%~1.slow.shrinkled"
del "%~1"
ren "%~1.slow.shrinkled" "%~nx1"
popd
goto:eof
