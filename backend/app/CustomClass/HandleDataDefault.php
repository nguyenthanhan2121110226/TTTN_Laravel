<?php

namespace App\CustomClass;


class HandleDataDefault
{
    public static function sort($table, $param = null)
    {
        switch ($param) {
            case 'name:desc':
                return $table->orderBy("name", "desc");
            case 'name:asc':
                return $table->orderBy("name", "asc");
            case 'date:desc':
                return $table->orderBy("created_at", "desc");
            case 'date:asc':
                return $table->orderBy("created_at", "asc");
            case 'name:desc':
                return $table->orderBy("name", "desc");
            case 'price:desc':
                return $table->orderBy("pricesale", "desc");
            case 'price:asc':
                return $table->orderBy("pricesale", "asc");
            case 'sale:desc':
                return $table->orderBy("sale", "desc");
            case 'view:desc':
                return $table->orderBy("view", "desc");
            case 'view:asc':
                return $table->orderBy("view", "asc");
            default:
                return $table;
        }
    }

    public static function limit($table, $param = null)
    {
        if ($param) {
            return $table->paginate($param);
        } else {
            return $table->paginate();
        }
    }

    public static function search($table, $param = null)
    {
        if ($param) {
            return $table->where("name", "like", "%" . $param . "%");
        } else {
            return $table;
        }
    }
}
