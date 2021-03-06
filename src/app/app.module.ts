import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProposalComponent } from './proposal/proposal.component';
import { StoryComponent } from './story/story.component';
import { SpaghettiComponent } from './spaghetti/spaghetti.component';
import { BddComponent } from './bdd/bdd.component';
import { ManagementComponent } from './management/management.component';

export const firebaseConfig = {
	apiKey: masterFirebaseConfig.apiKey,
	authDomain: masterFirebaseConfig.authDomain,
	databaseURL: masterFirebaseConfig.databaseURL,
	storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
	declarations: [
		AppComponent,
		UserDisplayComponent,
		WelcomeComponent,
		ProposalComponent,
		StoryComponent,
		SpaghettiComponent,
		BddComponent,
		ManagementComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		routing,
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireDatabaseModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
