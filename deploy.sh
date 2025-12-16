#!/bin/bash

docker build \
  -t us-central1-docker.pkg.dev/mchalgarra/mchalgarra-registry/portfolio:latest \
  --platform=linux/amd64 \
  .

docker push \
  us-central1-docker.pkg.dev/mchalgarra/mchalgarra-registry/portfolio:latest

gcloud run deploy portfolio \
  --image us-central1-docker.pkg.dev/mchalgarra/mchalgarra-registry/portfolio:latest \
  --region us-central1 \
  --project mchalgarra