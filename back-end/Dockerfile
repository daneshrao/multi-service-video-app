FROM ubuntu:16.04

RUN apt-get update -y && \
    apt-get install -y python-pip python-dev

# We copy just the requirements.txt first to leverage Docker cache
COPY ./requirements.txt /usr/src/app/requirements.txt

WORKDIR /usr/src/app

RUN pip install -r requirements.txt

COPY . /usr/src/app
EXPOSE 80
ENTRYPOINT [ "python" ]

CMD [ "back-end.py" ]
