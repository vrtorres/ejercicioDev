<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitc0b76f5feeba9fe88d24fb6631d37b5c
{
    public static $prefixLengthsPsr4 = array (
        'O' => 
        array (
            'Opis\\Database\\' => 14,
        ),
        'A' => 
        array (
            'Andromeda\\' => 10,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Opis\\Database\\' => 
        array (
            0 => __DIR__ . '/..' . '/opis/database/src',
        ),
        'Andromeda\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitc0b76f5feeba9fe88d24fb6631d37b5c::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitc0b76f5feeba9fe88d24fb6631d37b5c::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitc0b76f5feeba9fe88d24fb6631d37b5c::$classMap;

        }, null, ClassLoader::class);
    }
}