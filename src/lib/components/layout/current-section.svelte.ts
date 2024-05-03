export class CurrentSection {
	private _name = $state('About');

	get name() {
		return this._name;
	}

	set name(section: string) {
		this._name = section;
	}
}
