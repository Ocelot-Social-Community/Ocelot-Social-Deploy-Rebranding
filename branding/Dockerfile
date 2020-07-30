FROM exampleOrganization/backend:build-and-test
COPY shared/constants/links.js shared/constants/metadata.js src/config/

FROM exampleOrganization/styleguide:build-and-test
COPY styleguide/assets/ src/system/assets/
COPY styleguide/tokens/ src/system/tokens/

FROM exampleOrganization/webapp:build-and-test
COPY shared/constants/ constants/
COPY webapp/static/ static/
