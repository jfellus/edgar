#!/bin/sh
while true; do
	make
	inotifywait src src/*;
done
