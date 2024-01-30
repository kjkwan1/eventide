import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { InitializationService } from './core/services/initialization/initialization.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(
    private initializationService: InitializationService,
  ) {}
  public title = 'eventide';
  public isInitialized$!: Observable<boolean>;

  public ngOnInit(): void {
    this.initializationService.init();
    this.isInitialized$ = this.initializationService.isInitialized$;
  }
}
