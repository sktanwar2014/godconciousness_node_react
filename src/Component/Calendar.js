import Calendar from 'material-ui/DatePicker/Calendar';

<Calendar 
    autoOk={false}
    cancelLabel={false}
    firstDayOfWeek={1}
    onTouchTapDay={this.handleTouchTapDay}
    mode={'portrait'}
    open={true}
    ref="calendar"
/>