import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';

// Containers
import { ReorientComponent } from './reorient/reorient.component';
import { ReorientEventsEffects } from './reorient/+events/reorient.events.effects';
import { ReorientStateEffects } from './reorient/+state/reorient.state.effects';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardEventsEffects } from './dashboard/+events/dashboard.events.effects';
import { DashboardStateEffects } from './dashboard/+state/dashboard.state.effects';

// Components
import { WeekGoalsCardComponent } from './dashboard/cards/week-goals-card/week-goals-card.component';
import { NewQuarterComponent } from './dashboard/new-quarter/new-quarter.component';
import { WeekProgressCardComponent } from './dashboard/cards/week-progress-card/week-progress-card.component';
import { GreetingSearchComponent } from './dashboard/greeting-search/greeting-search.component';
import { UpcomingCardComponent } from './dashboard/cards/upcoming-card/upcoming-card.component';
import { NewWeekComponent } from './dashboard/new-week/new-week.component';
import { DateTimeComponent } from './dashboard/date-time/date-time.component';

/** Contains the main dashboard and setup views. */
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    EffectsModule.forFeature([
      ReorientStateEffects,
      ReorientEventsEffects,
      DashboardStateEffects,
      DashboardEventsEffects,
    ])
  ],
  declarations: [
    // Containers
    ReorientComponent,
    DashboardComponent,
    // Components
    WeekGoalsCardComponent,
    NewQuarterComponent,
    WeekProgressCardComponent,
    GreetingSearchComponent,
    UpcomingCardComponent,
    NewWeekComponent,
    DateTimeComponent,
  ],
  entryComponents: [
  ]
})
export class MainModule { }