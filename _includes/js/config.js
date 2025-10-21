var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var datasets = [
  'e61dbcec-5082-4a20-9d15-0be61dac7720', '1c3d0e60-90fe-48e2-9536-e3b0583c4172', 'af2e74e4-bd2e-4983-97ac-e21f6cc430a0', 
  '4abd984b-122c-44a0-8c92-b37e2f5299b1', '94ffb88e-d385-4846-888f-038edba9fff6', '02e8ee36-9f83-4850-a0f2-edcaacb80818', 
  'fc1dd9e3-ff53-4d57-9d8e-e29afbb955b8', '88da84d8-6c33-4012-828a-cdf738e542b9', 'd7add022-2594-4816-9c37-bc50fa8c9a61',
  '4785284d-b827-4d9e-95db-de23d527967c', 'bc28777c-2da4-4a65-9810-7389cbf62834', '5ed74de7-0ea3-4304-a4d5-882f129369b5', 
  '8d870547-a0b3-4e90-9c8f-f9465967dd9d', '48c0f475-61e6-4543-9cab-c67fae9000e2', '04939588-db37-4806-bb09-a95886f7741e',
  'da3c67c9-aad8-4404-9f5d-5fee08b36a72'
];

var siteConfig = {
  routes: {
    enabledRoutes: ['occurrenceSearch']
  },
  occurrence: {
    mapSettings: {
      lat: 0,
      lng: 0,
      zoom: 0
    },
    // You probably need help to configure the scope - so just ask
    // for his demo site we only show Fungi (taxonKey=5). It use the predicate structure known from GBIF download API. 
    // See https://www.gbif.org/developer/occurrence (long page without enough anchors - search for "Occurrence Download Predicates")
    // The format is however slightly different, in that is use camelCase for keys instead of CONSTANT_CASE. 
    rootPredicate: { type: 'in', key: 'datasetKey', values: datasets }, 
    occurrenceSearchTabs: ['TABLE', 'MAP', 'GALLERY', 'DATASETS', 'CLUSTERS', 'DASHBOARD'], // what tabs should be shown
    excludedFilters: ['occurrenceStatus', 'networkKey', 'hostingOrganizationKey', 'protocol', 'publishingCountryCode', 'institutionCode', 'collectionCode'],
    highlightedFilters: ['taxonKey', 'verbatimScientificName', 'institutionKey', 'collectionKey', 'catalogNumber', 'recordedBy', 'identifiedBy'],
    defaultTableColumns: ['features', 'institutionKey', 'collectionKey', 'catalogNumber', 'country', 'year', 'recordedBy', 'identifiedBy'],
    
    // see https://hp-theme.gbif-staging.org/data-exploration-config for more options
  }
};

// example of a language specific route overwrite
// if (pageLang === 'da')  {
//   siteConfig.routes.occurrenceSearch.route = '/observationer/sog';
// }
