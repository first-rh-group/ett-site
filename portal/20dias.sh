#!/bin/sh
find mail/firstrh.com.br/emaildelete/new -mtime +5 -type f -ls -delete
find mail/firstrh.com.br/emaildelete/cur -mtime +5 -type f -ls -delete