import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string'

export function getSpeakerName(params/*, hash*/) {
  let [firstName, lastName, patronymic] = params;
  return htmlSafe(`${firstName} ${lastName[0]}. ${patronymic[0]}.`);
}

export default helper(getSpeakerName);
