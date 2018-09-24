# Inherit from Heroku's stack
FROM ubuntu:latest

# Internally, we arbitrarily use port 80
ENV PORT 80
# Which version of node?
ENV NODE_ENGINE 8.6.0
# set node env to prod
ENV NODE_ENV production
# Locate our binaries
ENV PATH /app/node/bin/:/app/reservation/node_modules/.bin:$PATH

# Create some needed directories
RUN mkdir -p /app/node /app/.profile.d /app/reservation

RUN apt-get -qq update && DEBIAN_FRONTEND=noninteractive apt-get -qq -y install apt-utils
RUN apt-get -qq update && DEBIAN_FRONTEND=noninteractive apt-get -qq -y install curl python make g++ tcpdump

# Install node
RUN curl -s https://s3pository.heroku.com/node/v$NODE_ENGINE/node-v$NODE_ENGINE-linux-x64.tar.gz | tar --strip-components=1 -xz -C /app/node

# Export the node path in .profile.d
RUN echo "export PATH=\"/app/node/bin:/app/node_modules/.bin:\$PATH\"" > /app/.profile.d/nodejs.sh

ADD . /app/reservation
WORKDIR /app/reservation
RUN /app/node/bin/npm install --production

CMD ["/app/node/bin/npm", "start"]
