import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string'

export function getSpeakerName(params/*, hash*/) {
  let [firstName, lastName] = params;
  return htmlSafe(`<strong>${firstName}</strong> ${lastName[0]}.`);
}

export default helper(getSpeakerName);
