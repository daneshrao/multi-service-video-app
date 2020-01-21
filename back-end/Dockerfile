FROM python:3.8.1-alpine
COPY . /usr/src/app
RUN pip install -r requirements.txt
EXPOSE 80
CMD ["python","back-end.py"]