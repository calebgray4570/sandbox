import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'industryType'
})
export class IndustryTypePipe implements PipeTransform {

  transform(industry: any, args?: any): any {
    if(industry == 'accounting') {
      return 'Accounting'
    } else if(industry == 'advertising') {
      return 'Advertising'
    } else if(industry == 'agricultural') {
      return 'Agricultural'
    } else if(industry == 'airline/aviation') {
      return 'Airline/Aviation'
    } else if(industry == 'apparel') {
      return 'Apparel'
    } else if(industry == 'architecture') {
      return 'Architecture'
    } else if(industry == 'art') {
      return 'Art'
    } else if(industry == 'automobile') {
      return 'Automobile'
    } else if(industry == 'biotechnology') {
      return 'Biotechnology'
    } else if(industry == 'broadcasting') {
      return 'Broadcasting'
    } else if(industry == 'building materials') {
      return 'Building Materials'
    } else if(industry == 'computer hardware') {
      return 'Computer Hardware'
    } else if(industry == 'computer software') {
      return 'Computer Software'
    } else if(industry == 'construction') {
      return 'Construction'
    } else if(industry == 'consulting') {
      return 'Consulting'
    } else if(industry == 'consumer products') {
      return 'Consumer Products'
    } else if(industry == 'education') {
      return 'Education'
    } else if(industry == 'electronics') {
      return 'Electronics'
    } else if(industry == 'energy') {
      return 'Energy'
    } else if(industry == 'entertainment') {
      return 'Entertainment'
    } else if(industry == 'food') {
      return 'Food'
    } else if(industry == 'general') {
      return 'General'
    } else if(industry == 'government') {
      return 'Government'
    } else if(industry == 'healthcare') {
      return 'Healthcare'
    } else if(industry == 'hospitality') {
      return 'Hospitality'
    } else if(industry == 'human resources') {
      return 'Human Resources'
    } else if(industry == 'hvac') {
      return 'HVAC'
    } else if(industry == 'industrial') {
      return 'Industrial'
    } else if(industry == 'insurance') {
      return 'Insurance'
    } else if(industry == 'internet') {
      return 'Internet'
    } else if(industry == 'law enforcement') {
      return 'Law Enforcement'
    } else if(industry == 'legal') {
      return 'Legal'
    } else if(industry == 'manufacturing') {
      return 'Manufacturing'
    } else if(industry == 'merchandise') {
      return 'Merchandising'
    } else if(industry == 'military') {
      return 'Military'
    } else if(industry == 'non-profit') {
      return 'Non-Profit'
    } else if(industry == 'office equipment') {
      return 'Office Equipment'
    } else if(industry == 'other') {
      return 'Other'
    } else if(industry == 'packaging') {
      return 'Packaging'
    } else if(industry == 'pharmaceutical') {
      return 'Pharmaceutical'
    } else if(industry == 'photography') {
      return 'Photography'
    } else if(industry == 'printing') {
      return 'Printing'
    } else if(industry == 'public') {
      return 'Public'
    } else if(industry == 'real estate') {
      return 'Real Estate'
    } else if(industry == 'recreation') {
      return 'Recreation'
    } else if(industry == 'restaurants') {
      return 'Restaurants'
    } else if(industry == 'retail') {
      return 'Retail'
    } else if(industry == 'semiconductor') {
      return 'Semiconductor'
    } else if(industry == 'telecommunications') {
      return 'Telecommunications'
    } else if(industry == 'training') {
      return 'Training'
    } else if(industry == 'transportation') {
      return 'Transportation'
    } else {
      return industry
    }
  }

}
