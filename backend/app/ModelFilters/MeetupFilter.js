const ModelFilter = use('ModelFilter');
const moment = require('moment');

class MeetupFilter extends ModelFilter {
  date(date) {
    const now = moment(date);
    return this.where('when', '>=', now.startOf('day').format()).andWhere(
      'when',
      '<=',
      now.endOf('day').format(),
    );
  }
}

module.exports = MeetupFilter;
