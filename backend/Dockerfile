FROM centos:7.2.1511

RUN yum install -y epel-release; yum updateinfo; yum -y clean all
RUN yum install -y python36 python36-pip; yum -y clean all

RUN mkdir -p /usr/app/
WORKDIR /usr/app

ADD ./requirements.txt /usr/app/requirements.txt

RUN python3.6 -m pip install -r requirements.txt