FROM node

# set environment as production
ENV NODE_ENV production

# copy origin file to /source
COPY . /source
WORKDIR /source

RUN yarn

# expose port 80
EXPOSE 80

# start yarn
CMD ["yarn", "start"]

# TODO need to change based on the final deployment environment