install:
	pip install -r requirements.txt

.PHONY: server
server: install
	python server.py
