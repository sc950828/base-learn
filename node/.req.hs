#!/bin/bash

# req.sh
for((i=1;i<=10;i++)); do   
  curl http://127.0.0.1:3000
  echo ""
done 
