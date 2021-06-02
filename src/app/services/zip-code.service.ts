import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ZipCodeService {
  constructor() {}

  async getZipCodeByLocationSearch(locationSearch: string) {
    console.log('getZipCodeByLocationSearch');

    const response = await fetch(
      `https://public.opendatasoft.com/api/records/1.0/search/?dataset=georef-germany-postleitzahl&q=${locationSearch}&facet=plz_name&facet=lan_name&facet=lan_code`
    ).then((response) => response.json());
    console.log(response);
    return response?.records[0]?.fields?.plz_code;
  }
}
